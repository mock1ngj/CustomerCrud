<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerHomeController extends Controller
{
    public function index() {
        return inertia('Home');
    }
}
