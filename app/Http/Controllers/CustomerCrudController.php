<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CustomerCrudController extends Controller
{
    public function index() {
        return inertia('Home');
    }
}
