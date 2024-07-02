import { NextRequest, NextResponse } from "next/server";
export async function GET() {
  try {
    return NextResponse.json({status:true},{status:200})
    
  } catch (error) {
    return NextResponse.json({status:false},{status:401})
  }
  }

export async function POST(request: NextRequest){
  try {
    console.log(request.method)
    const body = await request.json()
    if(!body){
       throw new Error('Data Kosong')
      }
    if(!body.name){
      return NextResponse.json({message: 'Error cyin'},{status:401})  
    }
    return NextResponse.json({message:`Hai ${body.name}`})
  } catch (error) { 
    return NextResponse.json({message: error},{status:401})
  }
  

  

}