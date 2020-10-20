class ReportsController < ApplicationController

	include Powerbi

	def  index
		@access_token = Powerbi::Api.new.authenticate
		@reports = Powerbi::Api.new.reports(CONFIG['workspace_id'],@access_token)
	end

	def show
		datasets = params['datasets']
		report_id = params['id']
		@access_token = Powerbi::Api.new.authenticate
		@embed_token = Powerbi::Api.new.embed_token(datasets,report_id,CONFIG['workspace_id'],@access_token)
		@report = Powerbi::Api.new.report(report_id,CONFIG['workspace_id'],@access_token)
	end

	private

end

