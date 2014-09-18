require 'spec_helper'

describe Task do
	before do
		@task = Task.new(:name => "Teste 1", :start_date => "01/01/2014", :end_date => "01/01/2015", :cost => 10000, :status => "C")
	end

	subject { @task }

	describe "when name is not present" do
		before { @task.name = nil }
		it { should_not be_valid }
	end

	describe "when start date is not present" do
		before { @task.start_date = nil }
		it { should_not be_valid }
	end

	describe "when end date is not present" do
		before { @task.end_date = nil }
		it { should_not be_valid }
	end

	describe "when cost is not present" do
		before { @task.cost = nil }
		it { should_not be_valid }
	end

	describe "when status is not present" do
		before { @task.status = nil }
		it { should_not be_valid }
	end
end
