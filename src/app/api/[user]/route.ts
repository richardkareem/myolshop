export async function GET(Request : Request, {params} : {params: {user:string}}) {
    return new Response(`welcome to next js ${params.user}`);
  }