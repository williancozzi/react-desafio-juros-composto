# React - Desafio dos juros compostos (Interest calculator)

## Objectives
Create, using React, an application that should be able to calculate the appreciation/depreciation of a capital based on a monthly interest rate and time (months), using the compound interest concept.

## Techs
* Javascript
* Functional Components
* React
* Hooks
* Materialize
* SCSS animation

## Results
![React-Juros-Composto-Google-Chrome-2020-08-20-11-54-35-1](https://user-images.githubusercontent.com/39573063/90793902-816b4a80-e2e2-11ea-9912-e08c3df211ef.gif)

## Test the application
> deploying...

## Requirements
* Define the elements that will be considered as application state:
  * capital
  * monthly interest rate
  * period
* These elements will also be inputs of the application.
* Inputs shall be type number
  * Capital value goes from 0 to 100.000, step of 100
  * Interest rate value goes from -12 to 12, step of 0.1
  * Period value goes from 1 to 36, step of 1
* Output will be N boxes, being N the number of months, each one containing:
  * total value (amount after appreciation/depreciation of N months)
  * interest (value of appreciation/depreciation)
  * percentage (of appreciation/depreciation over the capital)
* The interest rate may be positive (appreciation) or negative (depreciation).
* Research and choose on of the compound interest formulas to implement.
* Improve interface using Materialize.
* Implementation shall use functional components and hooks.

## Instalation
In the project directory, you can run:

### `yarn`

then wait until finish to download, after this you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.
