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

class Bench < ActiveRecord::Base
  validate :description, :lat, :lng

  def self.in_bounds(bounds)
    puts bounds
    northEastLat = (bounds["northEast"]["lat"]).to_f
    southWestLat = (bounds["southWest"]["lat"]).to_f
    northEastLng = (bounds["northEast"]["lng"]).to_f
    southWestLng = (bounds["southWest"]["lng"]).to_f

    Bench.all.select do |bench|
      (bench.lat <= northEastLat && bench.lat >= southWestLat) &&
      (bench.lng >= northEastLng && bench.lng <= southWestLng)
    end
  end

  def self.filter_results(params)
    in_bounds = self.in_bounds(params[:bounds])

    in_bounds.select do |bench|
      bench.seating >= params[:seating][:min] &&
      bench.seating <= params[:seating][:max]
    end
  end
end
