class Task < ActiveRecord::Base
  has_many :comments, :dependent => :destroy
  validates_presence_of :name
  validates_presence_of :start_date
  validates_presence_of :end_date
  validates_presence_of :cost
  validates_presence_of :status
end
