<?php

use App\Http\Controllers\LeaguesController;
use App\Http\Controllers\StagiaireController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('listLeague',[LeaguesController::class,'listLeague']);
Route::get('League/{id}',[LeaguesController::class,'League']);
Route::get('LeagueExist/{id}',[LeaguesController::class,'LeagueExist']);
Route::get('Delete/{id}',[LeaguesController::class,'Delete']);
Route::post('addToFavorite',[LeaguesController::class,'addToFavorite']);
