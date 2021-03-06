<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Domain extends Model
{
    protected $fillable = [
        'name',
    ];

    public function categories()
    {
        return $this->hasMany('App\Category', 'domain_id', 'id');
    }
}
