import prisma from "@/lib/prisma"
import { Col, Row } from "antd"
import React from "react"
import { revalidatePath } from "next/cache"

type Props = {}

const Page = async(props: Props) => {


  revalidatePath("/admin/dashboard")

  return <div style={{width:"100%", minHeight:"100vh"}}>
           <Row gutter={16}>
            <Col className="gutter-row" span={6}>
              <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Businesses
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   20
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Items
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   80
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    Sales
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   105
                 </div>
              </div>
            </Col>
            <Col className="gutter-row" span={6}>
            <div style={{width:"100%",height:150,background:"white",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                 <div style={{color:"gray",fontSize:14,textAlign:"center",fontWeight:"bold"}}>
                    UoMs
                 </div>
                 <div style={{color:"black",fontSize:26,fontWeight:"bold",textAlign:"center"}}>
                   5
                 </div>
              </div>
            </Col>
           </Row>
  </div>
}

export default Page
