import React from 'react';
import logo from './logo.svg';
import './App.css';
import DonutChart from 'react-donut-chart';
import Chart from './main.js';
import './customfilter';


function App() {
  return (
    <div className="App">
<nav class="navbar navbar-expand-lg navbar-light">
  <a class="navbar-brand" href="#">Company X</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ml-auto">
      <li class="nav-item active">
        <a class="nav-link" href="#">Devendra</a>
      </li>
      <li class="nav-item">
         <a class="navbar-brand" href="#">
    <img src={logo} width="30" height="30" class="border border-secondary rounded-circle" data-toggle="tooltip" data-placement="bottom" title="Logout"/></a>
      </li>
    </ul>
  </div>
</nav>   

<div class="container-fluid mt-3"> 
<div class="row">
<div class="col-sm-6">
<div class="card h-100 m-2">
 <div class="card-header text-left">
    <h5>Products</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">Total Profit share of products</h5>
    <div class="d-flex">
<DonutChart
    data={[{
        label: 'Product 1',
        value: 30
    },
    {
        label: 'Product 2',
        value: 25
      },
{
        label: 'Product 3',
        value: 15
      },
      {
        label: 'Product 4',
        value: 20
      },
      {
        label: 'Product 5',
        value: 10,
        isempty: true

    }]} />
    </div>
  </div>
</div>
</div>
<div class="col-sm-6">
<div class="card h-100 m-2">
<div class="card-header text-left">
    <h5>Company Revenue</h5>
  </div>
  <div class="card-body">
    <h5 class="card-title">Actual vs target Revenue</h5>
<Chart />
  </div>
</div>
</div>

<div class="col-sm-12 mt-3">
<div class="card">
<div class="card-header text-left">
    Filter records
  </div>
  <div class="card-body">
    <h5 class="card-title">Total Records</h5>
    
  </div>
</div>
</div>

</div>
</div>
</div>

  );
}

export default App;
