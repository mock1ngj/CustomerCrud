<?php

namespace App\Http\Controllers;

use App\Models\CustomerModel;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Log;

class CustomerHomeController extends Controller
{
    //paginate data in the database
    public function index()
    {
        $customers = CustomerModel::paginate(5);
        return inertia('Home', ['customers' => $customers]);
    }

    public function delete(Request $request) {
        $customer = CustomerModel::where('id', $request->id);
        $customer->delete();
        return to_route('home');
    }
}
