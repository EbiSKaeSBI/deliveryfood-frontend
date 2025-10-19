import useCartStore from "@/stores/useCartStore.ts";
import { Trash2, Plus, Minus, ShoppingCart } from "lucide-react";
import {toast} from "react-hot-toast";

const Cart = () => {
    const {
        items,
        removeFromCart,
        updateQuantity,
        clearCart,
        getTotalPrice
    } = useCartStore();

    const handleQuantityChange = (id: string, currentQuantity: number, change: number) => {
        const newQuantity = currentQuantity + change;
        updateQuantity(id, newQuantity);
    };

    return (
        <div className="container mx-auto p-6">
            <div className="flex items-center gap-3 mb-8">
                <ShoppingCart className="w-8 h-8 text-blue-600" />
                <h2 className="font-bold text-3xl text-gray-900">Ваша корзина</h2>
                {items.length > 0 && (
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        {items.length} товар{items.length > 1 ? 'а' : ''}
                    </span>
                )}
            </div>

            {items.length === 0 ? (
                <div className="text-center py-16">
                    <ShoppingCart className="w-24 h-24 text-gray-300 mx-auto mb-4" />
                    <p className="text-xl text-gray-500 mb-2">Корзина пуста</p>
                    <p className="text-gray-400">Добавьте товары, чтобы сделать заказ</p>
                </div>
            ) : (
                <div className="space-y-6">
                    {/* Список товаров */}
                    <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
                        {items.map((item) => (
                            <div key={item.id} className="flex items-center p-6 border-b border-gray-100 last:border-b-0">
                                {/* Изображение товара (можно заменить на реальное) */}
                                <div className="w-16 h-16 bg-gradient-to-br from-blue-50 to-blue-100 rounded-lg flex items-center justify-center mr-4">
                                    <span className="text-blue-600 font-semibold text-lg">
                                        {item.name.charAt(0)}
                                    </span>
                                </div>

                                {/* Информация о товаре */}
                                <div className="flex-1 min-w-0">
                                    <h3 className="font-semibold text-gray-900 text-lg truncate">
                                        {item.name}
                                    </h3>
                                    <p className="text-gray-600 mt-1">
                                        {item.price.toLocaleString('ru-RU')} ₽ × {item.quantity}
                                    </p>
                                </div>

                                {/* Управление количеством */}
                                <div className="flex items-center gap-3 mx-6">
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity, -1)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-gray-600 hover:text-gray-800"
                                    >
                                        <Minus className="w-4 h-4" />
                                    </button>
                                    <span className="w-12 text-center font-semibold text-gray-900">
                                        {item.quantity}
                                    </span>
                                    <button
                                        onClick={() => handleQuantityChange(item.id, item.quantity, 1)}
                                        className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:border-gray-400 transition-colors text-gray-600 hover:text-gray-800"
                                    >
                                        <Plus className="w-4 h-4" />
                                    </button>
                                </div>

                                <div className="flex items-center gap-4">
                                    <span className="text-xl font-bold text-gray-900 min-w-24 text-right">
                                        {(item.price * item.quantity).toLocaleString('ru-RU')} ₽
                                    </span>
                                    <button
                                        onClick={() => removeFromCart(item.id)}
                                        className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                                        title="Удалить из корзины"
                                    >
                                        <Trash2 className="w-5 h-5" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-lg p-6 border border-blue-100">
                        <div className="flex justify-between items-center mb-4">
                            <span className="text-xl font-semibold text-gray-900">Итого:</span>
                            <span className="text-3xl font-bold text-blue-700">
                                {getTotalPrice().toLocaleString('ru-RU')} ₽
                            </span>
                        </div>

                        <div className="flex gap-3 pt-4 border-t border-blue-200">
                            <button
                                onClick={clearCart}
                                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors font-medium flex items-center justify-center gap-2"
                            >
                                <Trash2 className="w-4 h-4" />
                                Очистить корзину
                            </button>
                            <button onClick={() => {
                                clearCart();
                                toast.success("Спасибо за покупку!")
                            }} className="flex-1 px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all font-semibold shadow-lg hover:shadow-xl">
                                Оформить заказ
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Cart;