<?php

namespace App\Http\Controllers;

use App\Models\CustomerModel;
use Illuminate\Http\Request;

class AddCustomerController extends Controller
{
    public function index()
    {
        return inertia('AddCustomer');
    }
    public function insert(Request $request)
    {
        $customer = CustomerModel::create($request->all());
        $customer->save();
        return to_route('home');
    }
}
