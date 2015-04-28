class Comment < ActiveRecord::Base
  belongs_to :task
  validates_presence_of :task_id
  validates_presence_of :body
end
