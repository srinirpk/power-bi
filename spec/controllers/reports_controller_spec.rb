require 'rails_helper'


RSpec.describe ReportsController, type: :controller do

	describe "index " do
       it "it checks the index method" do
           get :index
	       expect(response).to be_successful
        end
  	end

	describe "show " do
       it "it checks the show method" do
           get :show
	       expect(response).to be_successful
        end
  	end
	
end


