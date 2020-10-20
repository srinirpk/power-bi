module Powerbi
	extend ActiveSupport::Concern
	class Api
		BASE_URL   = "https://login.microsoftonline.com"
    	RESOURCE   = "https://analysis.windows.net/powerbi/api"

		def initialize
			@tenantId  = CONFIG['tenant_id']
			@base_api_url = 'https://api.powerbi.com/v1.0/myorg'
		end

		def authenticate
			begin
				authenticate_url = "#{BASE_URL}/#{@tenantId}/oauth2/token"
				response = Excon.post(authenticate_url,:body => build_body,:headers => build_headers)
				body = JSON.parse(response.body)["access_token"]
			rescue StandardError => e
				Rails.logger.info "Rescued: #{e.inspect}"
			end
		end


		def embed_token(datasets,report_id,workspace_id,access_token)	
			embed_token_url = "#{@base_api_url}/groups/#{workspace_id}/reports/#{report_id}/GenerateToken"
			response = Excon.post(embed_token_url,:body => JSON.generate(build_body_embed_token(datasets)),:headers =>build_headers_reports(access_token))
	        response = JSON.parse(response.body)["token"]
	    end

		def reports(workspace_id,access_token)
        	response = Excon.get("#{@base_api_url}/groups/#{workspace_id}/reports",:headers =>build_headers_reports(access_token))
	        response = JSON.parse(response.body)["value"]
	    end


		def report(report_id,workspace_id,access_token)
			response = Excon.get("#{@base_api_url}/groups/#{workspace_id}/reports/#{report_id}",:headers =>build_headers_reports(access_token))
	      	response = eval(response.data[:body])
		end

		private

	    def build_body
	      URI.encode_www_form({
	        client_id: CONFIG['client_id'],
	        client_secret:  CONFIG['client_secret'],
	        grant_type: 'client_credentials',
	        resource: RESOURCE,
	      })
	    end

	    def build_headers
	      { 'Content-Type' => 'application/x-www-form-urlencoded'}
	    end

	    def build_headers_reports(access_token)
            { 
            	'Content-Type' => 'application/json',
                'Authorization' => "Bearer #{access_token}"
            }
                    
	    end

    	def build_body_embed_token(datasets)
	    	{
            'access_level' => "view",
            'identities' => [
                {
                   'username' =>  Rails.configuration.ObjectId,
					'customData' => "Rajalakshmi",
					'roles' => ["ReadOnly"],
                    'datasets' => [ datasets]
                }
            ]}
	    end

	end
end








