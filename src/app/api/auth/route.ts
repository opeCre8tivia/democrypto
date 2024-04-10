import { NextResponse } from "next/server"
import prisma from "../../../lib/prisma"
var bcrypt = require("bcryptjs")
var jwt = require("jsonwebtoken")

/**
 * a method that logs in an a creator
 */

export async function POST(req: Request) {
  try {
    const res = await req.json()
    // const response = await prisma.user.findFirst({ //change to admin
    //   where: {
    //     email: res.email,
    //   },
    // })

    //check if account exists
    let isExist = false
    if(res.email === "goldpointofsale@gmail.com"){
        isExist = true
    }

    if (!isExist) {
      return NextResponse.json({
        isError: true,
        msg: "Account does not exist",
      })
    }

    //compare passwords
    // const isCorrectPassword = bcrypt.compareSync(
    //   res.password,
    //   response.password
    // )

    let isCorrectPassword = false
    if(res.password === "Password@2020"){
         isCorrectPassword = true
    }

    if (!isCorrectPassword) {
      return NextResponse.json({
        isError: true,
        msg: "Wrong Password",
      })
    }

    //organise data

    const _data = {
      id: "",
    }

    const token = jwt.sign(
      {
        exp: Math.floor(Date.now() / 1000) + 60 * 60,
        data: _data,
      },
      process.env.JWT_SECRET
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
    })
  }
}
