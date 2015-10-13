class Api::BenchesController < ApplicationController

 def index
   @benches = Bench.in_bounds(params[:bounds])
  #  @benches = Bench.filter_results(params)
   render json: @benches
 end

 def create
   puts params
   @bench = Bench.new(bench_params)

   if @bench.save
     render :show
   else
     render json: @bench.errors.full_messages, status: 422
   end
 end

 private
 def bench_params
   params.require(:bench).permit(:description, :lat, :lng, :seating)
 end

end
