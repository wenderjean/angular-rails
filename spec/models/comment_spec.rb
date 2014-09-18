require 'spec_helper'

describe Comment do
  before do
  	@task = Task.new(:name => "Teste 1", :start_date => "01/01/2014", :end_date => "01/01/2015", :cost => 10000, :status => "C")
  	@task.save
  	@comment = Comment.new(:task_id => @task.id, :body => "Teste")
	end

	subject { @comment }

	describe "body is not present" do
		before { @comment.body = nil }
		it { should_not be_valid }
	end

	describe "task is not present" do
		before { @comment.task_id = nil }
		it { should_not be_valid }
	end
end
