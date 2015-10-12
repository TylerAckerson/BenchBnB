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

  def self.in_bounds(bounds)
    northEastLat = (bounds["northEast"]["lat"]).to_f
    southWestLat = (bounds["southWest"]["lat"]).to_f
    northEastLng = (bounds["northEast"]["lng"]).to_f
    southWestLng = (bounds["southWest"]["lng"]).to_f

    Bench.all.select do |bench|
      (bench.lat <= northEastLat && bench.lat >= southWestLat) &&
      (bench.lng >= northEastLng && bench.lng <= southWestLng)
    end
  end

end
