<?php

namespace App\Http\Controllers;

use App\Models\Leagues;
use Illuminate\Http\Request;

class LeaguesController extends Controller
{
  function  listLeague(){
        $list = Leagues::all();
        return $list;
    }
  function  League($id){
        $list = Leagues::where("id",$id)->get();
        return $list;
    }
  function  LeagueExist($id){
        $list = Leagues::where("id",$id)->get();
        if(!empty($list[0])){
            return ['message'=>"true"];
        }else{
            return ['message'=>"false"];

        }
        // dd($list);
        // return $list;
    }
  function  Delete($id){
     Leagues::where("id",$id)->delete();
      $listAll = Leagues::all();
      return $listAll;
    }

   function addToFavorite(Request $request){

        $league = new Leagues();
        $league->id   = $request->id  ;
        $league->name = $request->name;
        $league->type = $request->type;
        $league->logo = $request->logo;
        $league->save();
   }
}
