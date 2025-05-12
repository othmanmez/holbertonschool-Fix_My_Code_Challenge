result = []
ARGV.each do |arg|
    # Ignore les arguments non entiers
    next if arg !~ /^-?\d+$/

    # Convertir en entier
    i_arg = arg.to_i

    # Insertion de l'élément au bon endroit (tri croissant)
    is_inserted = false
    i = 0
    l = result.size
    while !is_inserted && i < l do
        if result[i] > i_arg  # Compare pour obtenir l'ordre croissant
            result.insert(i, i_arg)  # Insère l'élément à la bonne position
            is_inserted = true
        else
            i += 1
        end
    end

    # Si l'élément n'a pas été inséré, on l'ajoute à la fin
    result << i_arg if !is_inserted
end

# Affiche le résultat trié
puts result

