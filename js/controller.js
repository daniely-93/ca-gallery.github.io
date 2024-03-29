function init() {
  renderProjects();
  renderProjectsModal();
}

function renderProjectsModal() {
  var projects = getProjects();
  var strHTML = projects.map((proj, idx) => {
    return `<div class="portfolio-modal modal fade" id="portfolioModal${idx + 1}" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="close-modal" data-dismiss="modal">
              <div class="lr">
                <div class="rl"></div>
              </div>
            </div>
            <div class="container">
              <div class="row">
                <div class="col-lg-8 mx-auto">
                  <div class="modal-body">
                    <!-- Project Details Go Here -->
                    <h2>${proj.name}</h2>
                    <p class="item-intro text-muted">${proj.intro}</p>
                    <img class="img-fluid d-block mx-auto" src="${proj.imgUrl}" alt="${proj.name}">
                    <button class="btn btn-success mb25" onClick="window.open('${proj.url}');" type="button">
                        <span class="fa fa-play"></span> Play
                    </button>
                    <p>${proj.desc}</p>
                    <ul class="list-inline">
                      <li>Date: ${proj.date.toLocaleDateString()}</li>
                      <li>Client: ${proj.client}</li>
                      <li>Category:${proj.labels.map(label => ' ' + label)}</li>
                    </ul>
                    <button class="btn btn-primary" data-dismiss="modal" type="button">
                        <i class="fa fa-times"></i>
                        Close Project</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`
  }).join('');
  $('body').append(strHTML);
}

function renderProjects() {
  var projects = getProjects();
  var strHTML = projects.map((proj, idx) => {
    return `<div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal${idx + 1}">
            <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                    <i class="fa fa-plus fa-3x"></i>
                </div>
            </div>
            <img class="img-fluid" src="${proj.imgUrl}" alt="${proj.name}">
            </a>
            <div class="portfolio-caption">
                <h4>${proj.name}</h4>
                <p class="text-muted">${proj.intro}</p>
            </div>
        </div>`
  }).join('');
  console.log(strHTML);
  $('#portfolio .container .row').append(strHTML);
}

function onContactSubmitHandle() {
  window.open(`https://mail.google.com/mail/?view=cm&fs=1&to=danielyona93@gmail.com&su=${$('#subject').val()}&body=${$('#msg').val()}&bcc=${$('#email').val()}`)
}