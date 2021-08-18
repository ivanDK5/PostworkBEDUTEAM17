/**
 * 
 * @param {string} title 
 * @param {string} area 
 * @param {string} category 
 * @param {string} description 
 * @param {*} image 
 * @returns string
 */

export const cardComponent=(title='',area='',category='',description='',image='')=>{return`<div class="card w-100 " id="cardComponent">
  <div class="row g-0">
    <div class="col-lg-4">
      <img src="${image}" class="img-fluid rounded-start" alt="...">
    </div>
    <div class="col-lg-8">
      <div class="card-body">
        <h5 class="card-title">${title}</h5>
        <h6 class="card-title">${area}</h6>
        <h6 class="card-title">${category}</h6>
        <p class="card-text">${description}</p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>`}

