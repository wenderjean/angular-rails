class CommentsController < ApplicationController
	before_action :set_comment, only: [:destroy]
	respond_to :json

	def index
		@task = Task.find(params[:task_id])
		respond_to do |format|
      format.json { render json: @task.comments }
    end
	end

	def create
		@task = Task.find(params[:task_id])
    @comment = @task.comments.create(comment_params)

		respond_to do |format|
			if @comment.save
				format.json { render json: @comment, status: :ok}
			else
				format.json { render json: @comment.errors, status: :unprocessable_entity }
			end
		end
	end

	def destroy
	 	@comment.destroy
    respond_to do |format|
      format.json { head :no_content }
    end
	end

	private
		def set_comment
			@comment = Comment.find(params[:id])
		end

		def comment_params
			params.require(:comment).permit(:task_id, :body)
		end
end
