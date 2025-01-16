<?php

namespace App\Http\Controllers;

use App\Models\CustomerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;

class ViewCustomerController extends Controller
{
    //render the component with the requested data
    public function index(Request $request) {
        $customer = CustomerModel::findOrFail($request->id);
        return inertia('ViewCustomer', ['customer'=> $customer]);
    }

    public function update(Request $request){
        Log::info($request->all());
        $id = $request->id;
        unset($request['id']);
        CustomerModel::where('id', $id)->update($request->all());
    }
}
