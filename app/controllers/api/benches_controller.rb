class Api::BenchesController < ApplicationController

 def index
  #  @benches = Bench.in_bounds(bounds)
   @benches = Bench.in_bounds(params[:bounds])
   fail;
   render json: @benches
 end

 def create
  #  @bench = Bench.new(bench_params)
   #
  #  if @bench.save
  #   # render the bench...?
  #  else
  #   #  render json: @bench.errors.full_messages, status: 422
  #  end
 end

 private
 def bench_params
   params.require(:bench).permit(:description, :lat, :lng)
 end
end
