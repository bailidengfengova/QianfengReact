import axios from 'axios'
import React, { Component } from 'react'

export default class Comingsoon extends Component {

  componentDidMount() {
    axios.get("/ajax/comingList?ci=105&limit=10&movieIds=&token=&optimus_uuid=4B288340FADF11ECB480C556BE86AB278C53C20790394CFD92084F6846C45847&optimus_risk_level=71&optimus_code=10")
      .then(res => {
        console.log(res.data);
      })
  }

  render() {
    return (
      <div>Comingsoon</div>
    )
  }
}
