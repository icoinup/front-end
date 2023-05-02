import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Header.js';
import Main from './Main';
import Start from './Start';
import Input from './Input';
import QR from './QR';
import NotFound from './NotFound';

const App = () => {
	return (
		<div className='App'>
			<div className='App'>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Start/>}></Route>
					<Route path="/Main/*" element={<Main />}></Route>
					<Route path="/Start/*" element={<Start />}></Route>
          <Route path="/Input/*" element={<Input />}></Route>
          <Route path="/QR/*" element={<QR />}></Route>
					<Route path="*" element={<NotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
		</div>
	);
}

export default App;