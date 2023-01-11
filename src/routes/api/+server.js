export async function GET() {
	return new Response(JSON.stringify({ data: '응답 데이터 대령이요' }));
}

export async function POST() {
	return new Response(JSON.stringify({ data: '응답데이터 중령이요' }));
}
