class TasksController < ApplicationController
	before_action :set_task, only: [:show, :edit, :update, :destroy]
	respond_to :json

	def index
    @tasks = Task.all

    respond_to do |format|
      format.json { render json: @tasks }
    end
  end

  def show
  	respond_to do |format|
      format.json { render json: @task }
    end
  end

  def new
  	@task = Task.new
  end

  def edit
  end

	def create
		@task = Task.new(task_params)

		respond_to do |format|
			if @task.save
				format.json { render json: @task, status: :ok}
			else
				format.json { render json: @task.errors, status: :unprocessable_entity }
			end
		end
	end

	def update
		respond_to do |format|
			if @task.update(task_params)
				format.json { render json: @task, status: :ok }
			else
				format.json { render json: @task.errors, status: :unprocessable_entity }
			end
		end
	end

	def destroy
	 	@task.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
	end

	private
		def set_task
			@task = Task.find(params[:id])
		end

		def task_params
			params.require(:task).permit(:name, :start_date, :end_date, :cost, :status)
		end
end
