import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByText } = render(<CheckoutForm />);
    const formHeader = getByText(/Checkout Form/i);
    expect(formHeader).toBeInTheDocument;

});

test("form shows success message on submit with form details", async() => {
    const { getByText } = render(<CheckoutForm />);
    fireEvent.click(screen.getByText('Checkout'));
    await waitFor(() => screen.getByTestId('successMessage'));
    expect(screen.getByTestId('successMessage')).toBeInTheDocument;
});
