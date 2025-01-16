<?php

use App\Http\Controllers\AddCustomerController;
use App\Http\Controllers\CustomerHomeController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CustomerHomeController::class, 'index'])->name('home');
Route::controller(AddCustomerController::class)->group(function(){
    Route::get('/add', 'index');
});
require __DIR__.'/auth.php';
