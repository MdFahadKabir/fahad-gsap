import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from './layout/Layout';
import Home from './pages/Home';
import CoreAnimations from './pages/CoreAnimations';
import ScrollAnimations from './pages/ScrollAnimations';
import TextAnimations from './pages/TextAnimations';
import UIAnimations from './pages/UIAnimations';

// Scroll Pages
import ScrollRevealPage from './pages/scroll/ScrollRevealPage';
import ScrollParallaxPage from './pages/scroll/ScrollParallaxPage';
import ScrollHorizontalPage from './pages/scroll/ScrollHorizontalPage';
import ScrollPinPage from './pages/scroll/ScrollPinPage';
import ScrollSnapPage from './pages/scroll/ScrollSnapPage';
import ScrollTimelinePage from './pages/scroll/ScrollTimelinePage';
import AdvancedAnimations from './pages/AdvancedAnimations';
import PhysicsAnimations from './pages/PhysicsAnimations';
import TimelineAnimations from './pages/TimelineAnimations';
import LayoutAnimations from './pages/LayoutAnimations';

function App() {
    return (
        <Layout>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/core" element={<CoreAnimations />} />
                <Route path="/scroll" element={<ScrollAnimations />} />
                <Route path="/text" element={<TextAnimations />} />
                <Route path="/ui" element={<UIAnimations />} />

                {/* Independent Scroll Routes */}
                <Route path="/scroll/reveal" element={<ScrollRevealPage />} />
                <Route path="/scroll/parallax" element={<ScrollParallaxPage />} />
                <Route path="/scroll/horizontal" element={<ScrollHorizontalPage />} />
                <Route path="/scroll/pin" element={<ScrollPinPage />} />
                <Route path="/scroll/snap" element={<ScrollSnapPage />} />
                <Route path="/scroll/timeline" element={<ScrollTimelinePage />} />
                <Route path="/advanced" element={<AdvancedAnimations />} />
                <Route path="/physics" element={<PhysicsAnimations />} />
                <Route path="/timelines" element={<TimelineAnimations />} />
                <Route path="/layout" element={<LayoutAnimations />} />
            </Routes>
        </Layout>
    );
}

export default App;
