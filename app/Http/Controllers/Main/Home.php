<?php

namespace App\Http\Controllers\Main;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;

class Home extends Controller
{
    public function index()
    {
        if (Auth::check() === false) {
            return view('front.index');
        }
        $this->middleware('auth');
        return view('front.news_feed');
    }
}
