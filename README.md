# Charter Communications Rewards Calculator

Charter Communications UI Developer Homework - Customer rewards program calculator built with React JS.

## **Core Requirements:**
- [ ] Customer rewards program calculator
- [ ] 2 points per dollar spent over $100
- [ ] 1 point per dollar spent between $50-$100
- [ ] No points for dollars spent under $50
- [ ] Example: $120 purchase = 2×$20 + 1×$50 = 90 points
- [ ] Calculate rewards per customer per month and total
- [ ] Use React JS (NO TypeScript)
- [ ] Simulate async API call
- [ ] No Redux
- [ ] Create sample dataset
- [ ] Push to GitHub

## **MVP Features:**
- [ ] 1. Display customer transactions by month
- [ ] 2. Calculate reward points per transaction
- [ ] 3. Show monthly totals per customer
- [ ] 4. Show grand totals per customer
- [ ] 5. Async data loading simulation

## **Enhanced Features:**
- [ ] 1. Transaction filtering/sorting
- [ ] 2. Date range selection
- [ ] 3. Customer search
- [ ] 4. Export functionality
- [ ] 5. Responsive design
- [ ] 6. Loading states and error handling

## Points Calculation Logic
For any purchase amount:
- **Over $100**: 2 points per dollar for the amount over $100, plus 1 point per dollar for the $50-$100 range
- **$50-$100**: 1 point per dollar spent in this range
- **Under $50**: 0 points

**Example**: $120 purchase
- $20 over $100: 20 × 2 = 40 points
- $50 in the $50-$100 range: 50 × 1 = 50 points
- **Total**: 90 points

---

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).