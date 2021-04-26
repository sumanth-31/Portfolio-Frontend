export interface IConfirmDialogProps {
	confirmHandler: (confirm: boolean) => void;
	message: string;
	show?: boolean;
}
