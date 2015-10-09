# == Schema Information
#
# Table name: benches
#
#  id          :integer          not null, primary key
#  description :text
#  lat         :float
#  lng         :float
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Bench < ActiveRecord::Base
  validate :description, :lat, :lng

  
end
