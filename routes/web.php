<?php

use App\Http\Controllers\AddCustomerController;
use App\Http\Controllers\CustomerHomeController;
use App\Http\Controllers\ViewCustomerController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', [CustomerHomeController::class, 'index'])->name('home');

Route::controller(AddCustomerController::class)->group(function(){
    Route::get('/add', 'index');
});

Route::controller(ViewCustomerController::class)->group(function(){
    Route::get('/view/{id}', 'index');
    Route::post('/edit', 'update');
});
require __DIR__.'/auth.php';
