import { NextResponse } from 'next/server' 
// This function can be marked `async` if using `await` inside
export function middleware(request) {
    console.log('middleware executed')
//   return NextResponse.redirect(new URL('/add-task', request.url))
    const authToken=request.cookies.get('authToken')?.value
    
    if(request.nextUrl.pathname=='/api/login'){
        return 
    }
    if(request.nextUrl.pathname=='/api/user'){
        return 
    }

    const loggedInuserNotAccessPaths = request.nextUrl.pathname == '/login' || request.nextUrl.pathname =='/signuppage'
    if (loggedInuserNotAccessPaths){
        if (authToken){
            return NextResponse.redirect(new URL('/profile/user',request.url))
        }
    }else {
        // accessing secure route 
        if(!authToken){
            if(request.nextUrl.pathname.startsWith('/api')){
                return  NextResponse.json({
                    message :'Access Denied',
                    success : false
                },{
                    status:401
                })
            }

            return NextResponse.redirect(new URL('/login',request.url))
        }else{
            // /verify token 
        }
    }
  
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: ['/','/signuppage','/add-task','/api/:path*','/profile/:path*','/login','/show-task'],
}