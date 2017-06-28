@requests.each do |request|
  json.set! request.id do
    json.id request.id
    json.sender_id request.sender_id
    json.sender_name "#{request.sender.first_name} #{request.sender.last_name}"
  end
end
