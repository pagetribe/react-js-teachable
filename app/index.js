var USER_DATA = {
  name: 'page',
  username: 'pagetribe',
  image: 'https://avatars3.githubusercontent.com/u/198832?v=3&s=40'
}

var React = require('react')
var ReacDom = require('react-dom')

var ProfilePic = React.createClass({
  render: function(){
    return <img src={this.props.imageUrl} style={{height: 100, width: 100}} />
  }
})

var ProfileLink = React.createClass({
  render: function() {
    return (
      <div>
        <a href={'https://www.github.com/' + this.props.username }>
          {this.props.username}
        </a>
      </div>
    )
  }
})

var ProfileName = React.createClass({
  render: function () {
    return (
      <div> {this.props.uname} </div>
    )
  }
})

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfilePic imageUrl={this.props.user.image} />
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
      </div>
    )
  }
})



// var HelloWorld = React.createClass({
//   render: function() {
//     return (
//       <div> Hello World {this.props.name} </div>
//     )
//   }
// })

ReacDom.render (
  <Avatar user={USER_DATA} />,
  // <HelloWorld name="Mark"/>,
  document.getElementById('app')
)