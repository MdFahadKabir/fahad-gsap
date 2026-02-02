import React, { useState } from 'react';
import { ButtonHover } from '../components/animations/ui/ButtonHover';
import { Modal } from '../components/animations/ui/Modal';
import { FadeIn } from '../components/animations/core/Fade';

const UIAnimations = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalType, setModalType] = useState("fade");

    const openModal = (type) => {
        setModalType(type);
        setIsModalOpen(true);
    };

    return (
        <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold mb-12">UI Animations</h1>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <FadeIn>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-400">Button Interactions</h2>
                    <div className="flex flex-wrap gap-4">
                        <ButtonHover animation="scale" className="bg-blue-600 text-white px-6 py-3 rounded-lg">
                            Scale Effect
                        </ButtonHover>
                        <ButtonHover animation="lift" className="bg-purple-600 text-white px-6 py-3 rounded-lg">
                            Lift Effect
                        </ButtonHover>
                        <ButtonHover animation="glow" className="bg-pink-600 text-white px-6 py-3 rounded-lg">
                            Glow Effect
                        </ButtonHover>
                    </div>
                </FadeIn>

                <FadeIn delay={0.2}>
                    <h2 className="text-2xl font-semibold mb-6 text-gray-400">Modals</h2>
                    <div className="flex flex-wrap gap-4">
                        <ButtonHover onClick={() => openModal("fade")} className="bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded-lg">
                            Fade Modal
                        </ButtonHover>
                        <ButtonHover onClick={() => openModal("scale")} className="bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded-lg">
                            Scale Modal
                        </ButtonHover>
                        <ButtonHover onClick={() => openModal("slide-up")} className="bg-[#1a1a1a] border border-white/20 text-white px-6 py-3 rounded-lg">
                            Slide Modal
                        </ButtonHover>
                    </div>
                </FadeIn>
            </div>

            <Modal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                animation={modalType}
                className="max-w-md w-full"
            >
                <h3 className="text-2xl font-bold mb-4 text-white">Modal Title</h3>
                <p className="text-gray-300 mb-6">
                    This is a {modalType} animation modal. It uses GSAP for smooth entrance and exit animations.
                </p>
                <div className="flex justify-end gap-3">
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 text-gray-400 hover:text-white"
                    >
                        Cancel
                    </button>
                    <button
                        onClick={() => setIsModalOpen(false)}
                        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                    >
                        Confirm
                    </button>
                </div>
            </Modal>
        </div>
    );
};

export default UIAnimations;
