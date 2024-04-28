import { NextResponse } from "next/server"
var jwt = require("jsonwebtoken")

/**
 * a method that logs in an a creator
 */

export async function POST(req: Request) {
  try {
    const {address,profileId,signature} = await req.json()
    

    //organise data

    const _data = {
      address,
      profileId,
      signature
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: _data,
      },
      "democryppt"
    )

    //TODO: create session

    return NextResponse.json({
      isError: false,
      msg: "Success",
      payload: token,
    })
  } catch (error) {
    console.log(error)
    return NextResponse.json({
      isError: true,
      msg: "Something has gone wrong",
      payload:null
    })
  }
}
