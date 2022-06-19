export interface IBuyMinerButtonProps {
	amount: number,
	balance: number, 
	buyMiner: (cost: number) => void
}
