<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class AddCustomerController extends Controller
{
    public function index(){
        return inertia('AddCustomer');
    }
}
