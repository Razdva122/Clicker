export interface IMinerProps {
	onSuccess: () => void, 
	amount: number,
	profit: number,
	timer: number
}

export interface IMinerState {
	timer: string,
	progress: number
}