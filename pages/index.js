import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <main>
      <div className="container my-5">
        <div className="row">
          <div className="col-md-1" />
          <div className="col-md-7">
            <section className="story-container" id="story">
              <ul>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>billy_M</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>billy_M</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/2.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>John_doe</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(1).jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>judit_3</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/4.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>paulaa</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/5.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>julia_art</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/6.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>berta_ng</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/15.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>my_art</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/17.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>photo_me</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>rae</span>
                </li>
                <li>
                  <div className="story">
                    <img src="https://mdbootstrap.com/img/Photos/Avatars/img (31).jpg" className="rounded-circle" height={50} alt="Avatar" />
                  </div>
                  <span>billy_M</span>
                </li>
              </ul>
            </section>
            <section className="newsfeed my-5">
              <div className="post">
                <div className="card">
                  <div className="card-body">
                    <div className="container">
                      {/* Author */}
                      <div className="row">
                        <div className="col-md-8">
                          <div className="d-flex story">
                            <img src="https://mdbootstrap.com/img/new/avatars/4.jpg" className="rounded-circle" height={40} alt="Avatar" />
                            <div className="mt-2">
                              <a href className="text-dark">
                                <strong className="mt-5" style={{ marginLeft: ".8rem"}}>julia_art</strong>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <i className="fas fa-ellipsis-h fa-lf mt-2 float-right" style={{float: 'right'}}  />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Photo */}
                  <div className="bg-image hover-overlay ripple shadow-1-strong rounded-0" data-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/city/092.jpg" className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                    </a>
                  </div>
                  {/* Interactions  */}
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <i className="far fa-heart fa-lg ml-0" />
                          <i className="far fa-comment fa-lg mx-3" />
                          <i className="far fa-paper-plane fa-lg" />
                        </div>
                        <div className="col-md-4 text-right">
                          <i className="far fa-bookmark fa-lg" style={{float: 'right'}}  />
                        </div>
                      </div>
                      {/* Liked by  */}
                      <div className="row mt-1">
                        <div className="col-md-8 mt-1">
                          <img className="rounded-circle" src="https://mdbootstrap.com/img/new/avatars/7.jpg" alt="avatar" style={{width: '20px'}} />
                          <small>Liked by <strong>janet_t</strong> and
                            <strong>500,678</strong> others</small>
                        </div>
                      </div>
                      {/* Description  */}
                      <div className="row">
                        <div className="col-md-12 mt-1">
                          <p>
                            <strong className="text-dark">juliar.art</strong> Lorem,
                            ipsum dolor sit amet consectetur adipisicing elit.
                            Eveniet dolorem iste enim odit corporis quos dolore
                            rem... <small className="my-1">more</small>
                          </p>
                        </div>
                      </div>
                      {/* Comments   */}
                      <div className="row">
                        <small className="my-1">View all 2137 comments</small>
                        <p className="mb-0">
                          <strong className="text-dark">alex_123</strong> Lorem,
                          ipsum dolor.
                        </p>
                        <p>
                          <strong className="text-dark">janet_t</strong> Lorem ipsum
                          dolor sit amet consectetur adipisicing elit.
                          Necessitatibus corporis omnis facilis possimus.
                        </p>
                        <small className="my-1">22 hours ago</small>
                      </div>
                      {/* Comment form */}
                      <div className="row mt-2">
                        <hr />
                        <div className="col-md-11">
                          <div className="form-outline">
                            <input type="text" id="form1" className="form-control" placeholder="Leave a comment" />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <p className="text-info mt-1">Post</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post my-5">
                <div className="card">
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          {/* Data */}
                          <div className="d-flex">
                            <a href>
                              <img src="https://mdbootstrap.com/img/new/avatars/18.jpg" className="border rounded-circle mr-2" alt="" style={{height: '40px'}} />
                            </a>
                            <div className="mt-2">
                              <a href className="text-dark">
                                <strong className="mt-5" style={{ marginLeft: ".8rem"}}>jane_photos</strong>
                              </a>
                            </div>
                          </div>
                        </div>
                        <div className="col-md-4">
                          <i className="fas fa-ellipsis-h fa-lf mt-2" style={{float: 'right'}} />
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Media */}
                  <div className="bg-image hover-overlay ripple rounded-0" data-ripple-color="light">
                    <img src="https://mdbootstrap.com/img/new/standard/city/090.jpg" className="w-100" />
                    <a href="#!">
                      <div className="mask" style={{backgroundColor: 'rgba(251, 251, 251, 0.2)'}} />
                    </a>
                  </div>
                  {/* Media */}
                  {/* Interactions */}
                  <div className="card-body">
                    <div className="container">
                      <div className="row">
                        <div className="col-md-8">
                          <i className="far fa-heart fa-lg ml-0" />
                          <i className="far fa-comment fa-lg mx-3" />
                          <i className="far fa-paper-plane fa-lg ml-2" />
                        </div>
                        <div className="col-md-4 text-right">
                          <i className="far fa-bookmark fa-lg" style={{float: 'right'}}  />
                        </div>
                      </div>
                      {/* Liked by section */}
                      <div className="row">
                        <div className="col-md-8 mt-1">
                          <img className="rounded-circle" src="https://mdbootstrap.com/img/new/avatars/8.jpg" alt="avatar" style={{width: '20px'}} />
                          <small>Liked by <strong>johhny_h</strong> and
                            <strong>100,679 others</strong></small>
                        </div>
                      </div>
                      {/* Post descripion */}
                      <div className="row">
                        <div className="col-md-12 mt-1 mb-0">
                          <p className="mb-0">
                            <strong className="text-dark">jane_photos</strong> Lorem
                            ipsum dolor, sit amet consectetur adipisicing elit.
                            Consequatur esse quas voluptatem, voluptate,
                            deserunt iure quod. quas voluptatem, voluptate,
                            deserunt iure quod
                          </p>
                        </div>
                        <small className="my-1" style={{color: 'grey'}}>View all 2137 comments</small>
                        <p className="mb-0">
                          <strong className="text-dark">johhny_shine</strong> Lorem
                          ipsum
                        </p>
                        <p className="mb-0">
                          <strong className="text-dark">billy_the_kid</strong> Lorem
                          ipsum dolor, sit amet consectetur adipisicing elit.
                          Consequatur esse quas voluptatem, voluptate, deserunt
                          iure quod.
                        </p>
                      </div>
                      <small className="ml-3 mt-2" style={{color: 'grey'}}>22 hours ago</small>
                      <div className="row mt-2">
                        <hr />
                        <div className="col-md-11">
                          <div className="form-outline">
                            <input type="text" id="form1" className="form-control" placeholder="Leave a comment" />
                          </div>
                        </div>
                        <div className="col-md-1">
                          <p className="text-info mt-1">Post</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <div className="col-md-3 d-none d-lg-block">
            <section className="mt-3">
              {/* Author */}
              <div className="row">
                <div className="col-md-3">
                  <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle" height={60} alt="Avatar" />
                </div>
                <div className="col-md-9">
                  <ul className="ml-0 pl-1 mt-1 list-unstyled">
                    <li>
                      <p className="ml-3 text-dark mb-0 mt-1">
                        <strong>bill_the_programmer.js</strong>
                      </p>
                    </li>
                    <li>
                      <span className="ml-3 text-dark">Bill Doe</span>
                    </li>
                  </ul>
                </div>
              </div>
              {/* Suggestions */}
              <div>
                <small>Suggestions For You</small>
                <span className="float-right">See All</span>
              </div>
              {/* Suggested users */}
              <div className="row">
                <div className="col-md-2">
                  <img src="https://mdbootstrap.com/img/new/avatars/10.jpg" className="rounded-circle mt-2" height={40} alt="Avatar" />
                </div>
                <div className="col-md-8">
                  <ul className="ml-0 pl-1 mt-1 list-unstyled">
                    <li>
                      <small className="user-name"><strong>john_23</strong></small>
                    </li>
                    <li>
                      <span className="user-name">Followed by john_1 + 20 more</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="user-name mt-4 text-primary">Follow</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src="https://mdbootstrap.com/img/new/avatars/11.jpg" className="rounded-circle mt-2" height={40} alt="Avatar" />
                </div>
                <div className="col-md-8">
                  <ul className="ml-0 pl-1 mt-1 list-unstyled">
                    <li>
                      <small className="user-name"><strong>donald_the_duck</strong></small>
                    </li>
                    <li>
                      <span className="user-name">Followed by john_1 + 35 more</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="user-name mt-4 text-primary">Follow</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src="https://mdbootstrap.com/img/new/avatars/4.jpg" className="rounded-circle mt-2" height={40} alt="Avatar" />
                </div>
                <div className="col-md-8">
                  <ul className="ml-0 pl-1 mt-1 list-unstyled">
                    <li>
                      <small className="user-name"><strong>bill_the_programmer.js</strong></small>
                    </li>
                    <li>
                      <span className="user-name">Followed by john_1 +10 more</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="user-name mt-4 text-primary">Follow</p>
                </div>
              </div>
              <div className="row">
                <div className="col-md-2">
                  <img src="https://mdbootstrap.com/img/new/avatars/1.jpg" className="rounded-circle mt-2" height={40} alt="Avatar" />
                </div>
                <div className="col-md-8">
                  <ul className="ml-0 pl-1 mt-1 list-unstyled">
                    <li>
                      <small className="user-name"><strong>bill_the_programmer.js</strong></small>
                    </li>
                    <li>
                      <span className="user-name">Followed by john_1 +10 more</span>
                    </li>
                  </ul>
                </div>
                <div className="col-md-2">
                  <p className="user-name mt-4 text-primary">Follow</p>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>

  )
}
