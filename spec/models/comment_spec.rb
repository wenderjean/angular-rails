require 'rails_helper'

describe Comment do

  it { should belong_to(:task)  }
  it { should validate_presence_of(:task_id)  }
  it { should validate_presence_of(:body)  }
end
