# Tax and Payment Tracking System

## Overview
The Tax and Payment Tracking System is a robust web application designed to help businesses manage their financial transactions and tax obligations. Built using Flask and SQLite, this system simplifies tracking and managing payments, enhancing financial accuracy and compliance.

## Features
- **Payment Records Management**: Add, edit, and delete payment details including company name, amount, dates, and tax rates.
- **Tax Calculation**: Automatically calculates the taxes due based on payment records, simplifying tax compliance.
- **Dynamic Reporting**: View and filter payment summaries based on due dates, ensuring timely financial management.

## Built With
- **[Flask](https://palletsprojects.com/p/flask/)** - The web framework used for building the application.
- **[SQLite](https://sqlite.org/index.html)** - The database technology used for storing all payment data.
- **HTML/CSS** - For the frontend presentation layer.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

```bash
python -m venv venv
source venv/bin/activate  # On Windows use `venv\Scripts\activate`
pip install -r requirements.txt
