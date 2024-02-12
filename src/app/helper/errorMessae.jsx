import {NextResponse} from 'next/server'


export const getResponseMessage=(message,statusCode,successStatus) =>{
    return NextResponse.json(

        {
            mesage : message,
            success : successStatus
        },
        {
            status:statusCode
        }
    )
}