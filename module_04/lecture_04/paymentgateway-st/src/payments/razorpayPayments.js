class RazorpayPayments extends Payments{
    constructor() {
        this.sdk = "RazorpayPayments sdk";
    }

    requestInvoice() {
        console.log("RazorpayPayments: createPayment");
    }
}